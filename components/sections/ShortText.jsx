import removeMarkdown from 'remove-markdown';

export default function ShortText({ text, limit }) {
  text = removeMarkdown(text);
  let shortText =
    (text || '').slice(0, limit) + (text?.length > limit ? ' ...' : '');

  return <>{shortText}</>;
}
