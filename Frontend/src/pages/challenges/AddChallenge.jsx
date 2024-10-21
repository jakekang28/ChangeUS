import {useForm, SubmitHandler} from 'react-hook-form'
import axios from "axios";
import  {useNavigate}  from "react-router-dom";
import styled from "styled-components";
import Header from '../../components/Header';
import ScreenContainer from "../../components/ScreenContainer";
 export default function AddChallenge(){
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmitHandler = async (data) =>{
        
        const formData = new FormData()
        formData.append("files", data.files[0])
        formData.append("details",data.details)
        console.log(formData)
        const config = {
            headers: {
            'Content-Type': 'multipart/form-data',
                },
            };
        
                await axios.post(`http://localhost:4003/api/uploads`, formData, config)
                alert('등록되었습니다');
                navigate('/challenges-dashboard')    
    }
    return (
    <ScreenContainer>
      <Header />
      <form onSubmit={handleSubmit(onSubmitHandler)} >
        <Wrapper>
          <Text>챌린지에 참여한 모습을 사진으로 남겨줘!</Text>
          <input type='file'{...register('files')}>
          </input>
        </Wrapper>
        <Wrapper>
          <Text>어떤 사진인지 간단히 설명해줘!</Text>
          <InputContainer {...register('details')}/>
        </Wrapper>
        <Button type="submit">나도 참여할래!</Button>
      </form>
    </ScreenContainer>

    )
   
}
const Wrapper = styled.div`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
const Text = styled.span`
  color: #403e47;
  font-family: NanumSquareRoundOTF;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 24px */
  letter-spacing: -0.48px;
`;
const Img = styled.img`
  width: 100%;
`;

const InputContainer = styled.input`
  border-radius: 10px;
  border: 2px solid #e0e0e0;
  height: 215px;
`;

const Button = styled.button`
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  width: calc(100% - 48px);
  border-radius: 12px;
  background: #04d7b7;
  box-shadow: 0px 4px 0px 0px #009c85;
  padding: 15px;
  text-align: center;
  font-weight: 800;
  color: #403e47;
`;





