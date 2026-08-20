export default function validateCulture(body){
let {title, description, gallery, video, coverImage, category} = body;

  if(!title)
    throw new Error("Invalid data: No title is given");

  if(!description || description.trim() == '')
    description = "No description";

  if (!category || category.trim() == '') category = 'Uncategorized';

}
