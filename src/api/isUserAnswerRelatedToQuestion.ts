import { API_URLS } from "../constants/api-url";
import { ChatCompletionResponse } from "../types/chat-api";
import { ApiRequest } from "./api";

const isUserAnswerRelatedToQuestion = async (
  answer: string,
  question: string
) => {
  const prompt =
    "Kullanıcıya şöyle bir soru soruldu: " +
    question +
    " Kullanıcının verdiği cevap: " +
    answer +
    ' Bu cevap soruda istenen bilgileri içeriyor mu? Lütfen sadece "evet" ya da "hayır" şeklinde cevap veriniz.' +
    "İkinci cümlede de kullanıcıya daha iyi bir yorum yapabilmesi için bir öneri yöneltiniz. Örneğin: 'Soruya şu şekilde cevap verebilirsiniz: ...'";

  const response = await ApiRequest<ChatCompletionResponse>(
    API_URLS.CHAT as string,
    "POST",
    {
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
      model: "gemma2-9b-it",
    }
  );

  if (response.isSuccessful) {
    const data = response.data.full_response;
    const responseMessage = data.choices?.[0]?.message?.content || "";
    const isRelated = responseMessage?.toLowerCase().includes("evet");
    const splitText = responseMessage?.split(isRelated ? "Evet." : "Hayır.");
    const advice =
      "Lütfen soruya ilgili bir cevap veriniz. " + splitText?.[1]?.trim();

    return { isRelated, response: responseMessage, advice };
  } else {
    console.log("Error in isUserAnswerRelatedToQuestion", response);
    return { isRelated: false, response: "", advice: "" };
  }
};

export { isUserAnswerRelatedToQuestion };
