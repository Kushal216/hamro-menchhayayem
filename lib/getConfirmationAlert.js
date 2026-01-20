"use client"
export default function getConfirmationAlert(message){
  const confirm = window.confirm(message);
  return confirm;
}
