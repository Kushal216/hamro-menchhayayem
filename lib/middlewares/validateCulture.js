export default function validateCulture(body){
const {title, description, gallery, video, coverImage, category} = body;

  if(!title)
    throw new Error("Invalid data: No title is given");

  if(!description || description.trim() == '')
    description = "No description";

  if (!category || description.trim() == '') description = 'Uncategorized';

}
