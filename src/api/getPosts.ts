/*

Hacer la llamada get a https://jsonplaceholder.typicode.com/posts para obtener los posts

*/
export const getPosts = () => {};

// interface ya creada por comodidad del post que devuelve jsonplaceholder
export interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
