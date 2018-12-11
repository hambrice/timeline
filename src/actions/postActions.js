export function newPost(postContent) {

  return {
    type: "NEW_POST",
    content: postContent
  }
}
