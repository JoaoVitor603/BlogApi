export default interface IcreatePostRequestDTO {
  title: string;
  postOwnerId: string;
  postOwnerName?: string;
  content: string;
  category: string[];
}
