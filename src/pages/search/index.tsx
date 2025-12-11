// router라는 객체를 컴포넌트 내부에서 사용할 수 있도록 반환하는 함수
import { useRouter } from "next/router"

export default function Page() {
    const router = useRouter();

    const { q } = router.query;

    return <h1>Search {q}</h1>
}