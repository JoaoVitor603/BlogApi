export default interface IUpdatePostRequestDTO {
  title: string;
  content: string;
  category: string[];
  postOwnerId: string;
  postId: string;
}

/**
 @example {
  "title": "Titulo de Example",
  "content": "sou um exemplo",
  "category": ["TECNOLOGIA"],
  "postId": "08864772-2c8d-405f-84bf-fe09f1d0f939"
 }
 */
export interface IUpdatePostRequestBody {
  title: string;
  content: string;
  category: string[];
  postId: string;
}
