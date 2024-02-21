
import { useParams } from "react-router-dom"

export default function TaskDetailPage() {

  const { id } = useParams()

  return (
    <div>
      details {id}
    </div>
  )
}
