import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";


function Home() {
    return (
    <div>
        <Title size="medium" color="background">제목 테스트</Title>
        <Button size="large" scheme="primary">
            버튼 테스트
        </Button>
        <InputText placeholder="여기에 입력하세요" />
        <div>home body</div>
    </div>
    )
}

export default Home;