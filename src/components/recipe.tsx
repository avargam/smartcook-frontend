export default function Recipe({ content } : { content: string }) {
  return <div className="recipe">
      <p>{ content }</p>
    </div>
}