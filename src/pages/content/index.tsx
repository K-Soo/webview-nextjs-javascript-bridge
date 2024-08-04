import { useRouter } from "next/router";
import { styled } from "styled-components";
import useAppRouter from "@/hooks/useAppRouter";

export default function ContentPage() {
  const router = useRouter();
  const appRouter = useAppRouter();

  const cards = new Array(100).fill(null);

  return (
    <>
      <button onClick={() => router.back()}>뒤로가기</button>
      <div>컨텐츠 페이지</div>
      <CardWrapper>
        {cards.map((_, index) => (
          <Card onClick={() => appRouter.push(`/content/${index}`)} key={index}>
            Card {index + 1}
          </Card>
        ))}
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 40%;
  height: 200px;
  border: 1px solid red;
`;
