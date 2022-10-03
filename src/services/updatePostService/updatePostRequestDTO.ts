export default interface IUpdatePostRequestDTO {
  title: string;
  content: string;
  category: string[];
  postOwnerId: string;
  postId: string;
}
