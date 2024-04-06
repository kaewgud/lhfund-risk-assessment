import { useRouter } from "next/router";
import { api } from "~/utils/api";
export default function ManageQuestion() {
  const router = useRouter();
  const { id } = router.query;

  const { data: question } = api.assessment.getQuestionById.useQuery({ id: id as string });

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">จัดการคำถาม</h1>
      <div>
        {JSON.stringify(question, null, 2)}
      </div>
    </div>


  )
}
