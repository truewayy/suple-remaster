import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled as styled_mui } from "@mui/system";
import PropTypes from "prop-types";
import TeamList from "../components/TeamList";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";
import { useRecoilState } from "recoil";
import { partState, userInfoState } from "../store/state";
import jwt_decode from "jwt-decode";
import { getToken } from "../api/apiController";
import { Wrapper } from "styles/common";
// designed by soo kyung

export const options = [
  {
    name: "전체",
    lec: "all",
  },
  {
    name: "프론트엔드",
    lec: "frontEnd",
  },
  {
    name: "백엔드",
    lec: "backEnd",
  },
  {
    name: "앱",
    lec: "app",
  },
];

const Main = () => {
  let navigate = useNavigate();
  const nowTime = moment().format("YYYY년 M월 D일");
  const [search, setSearch] = useState("");
  const [part, setPart] = useRecoilState(partState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const handler = (e) => {
    setPart(e);
  };
  const onKeypress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${search}`);
    }
  };
  useEffect(() => {
    const token = getToken("accessToken");
    if (token === "undefined" || !token) return;
    else {
      let parsed = jwt_decode(token);
      setUserInfo(parsed);
    }
  }, [setUserInfo]);
  return (
    <Wrapper>
      <Container>
        <SearchInput
          placeholder="원하는 기술스택, 제목으로 프로젝트를 검색해보세요!"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={onKeypress}
        />
        <SelectWrapper>
          <MainTextBox>
            <MainText>분야별로</MainText>
            <MainText>
              나의 팀원들을 찾아보세요!{" "}
              <GrayText onClick={() => navigate("/total")}>
                {"글 목록 >"}
              </GrayText>
              <MobileGrayText onClick={() => navigate("/total")}>
                {"글 목록 >"}
              </MobileGrayText>
            </MainText>
          </MainTextBox>
          <CustomSelect value={part} onChange={handler}>
            {options.map((index) => (
              <StyledOption key={index.name} value={index.lec}>
                {index.name}
              </StyledOption>
            ))}
          </CustomSelect>
        </SelectWrapper>
        <ContentWrapper>
          <NoticeWrapper
            onClick={() => {
              navigate("notice");
            }}
          >
            <NoticeContainer>
              <MainText id="notice">
                {userInfo ? <span>{userInfo.id}님</span> : null} 오늘은{" "}
                <PaddingBottom />
                {nowTime} 입니다.
              </MainText>
              <NoticeImg src="/notice.png" />
            </NoticeContainer>
            <NoticeContainer id="bottom">
              <MainText id="bottom">오늘의 공지사항 →</MainText>
            </NoticeContainer>
          </NoticeWrapper>
          <TeamList />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  margin: 20px;
`;

const SearchInput = styled.input`
  width: 70%;
  font-size: 16px;
  border: 2px solid #00a0e9;
  border-radius: 15px;
  padding: 10px 20px;
  margin: 10px;
  background-repeat: no-repeat;
  background-position: 98%;

  &:focus {
    outline: none;
    border-color: #5d8bf4;
  }
  &:hover {
    border-color: #5d8bf4;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
    transform: scale(0.92);
    ::placeholder {
      font-size: 13px;
    }
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 25px;
  justify-content: space-between;
`;

const MainTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainText = styled.div`
  font-weight: 500;
  font-size: 22px;
  padding-bottom: 5px;
  letter-spacing: 1px;
  &#notice {
    padding-bottom: 30px;
  }
  &#bottom {
    padding-bottom: 0px;
    font-size: 15px;
    font-weight: bold;
  }
  @media screen and (max-width: 767px) {
    font-size: 15px;
    font-weight: 600;
  }
`;

const GrayText = styled.span`
  font-size: 14px;
  text-decoration: underline;
  color: #a3a3a3;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const MobileGrayText = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    font-size: 14px;
    text-decoration: underline;
    color: #a3a3a3;
    cursor: pointer;
    margin-top: 15px;
  }
`;

const PaddingBottom = styled.div`
  padding-bottom: 5px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  margin-top: 35px;
  row-gap: 30px;
  column-gap: 50px;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const NoticeWrapper = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 3;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 1px #e5e5e5;
  padding: 40px;
  &:hover {
    cursor: pointer;
    border: 1px solid rgba(102, 186, 255, 0.4);
    box-shadow: 0px 0px 20px 1px rgba(102, 186, 255, 0.4);
  }
  @media screen and (max-width: 1023px) {
    grid-column-end: 4;
  }
  @media screen and (max-width: 767px) {
    grid-column-end: 1;
  }
`;

const NoticeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &#bottom {
    justify-content: flex-end;
  }
`;

const NoticeImg = styled.img`
  width: 70px; 
  height: 70px; 
  transform: rotate(10deg);
  @media screen and (max-width: 767px) {
    width: 60px;
    height: 60px; 
`;

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledButton = styled_mui("button")(
  ({ theme }) => `
    font-family: Pretendard, sans-serif;
    font-size: 13px;
    font-weight: 600;
    box-sizing: border-box;
    max-height: 40px;
    min-width: 180px;
    @media screen and (max-width: 767px) {
      min-width: 150px;
  }
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 2px solid ${theme.palette.mode === "dark" ? grey[800] : "#00a0e9"};
    border-radius: 0.75em;
    margin-top: 15px;
    padding: 10px;
    padding-left: 20px;
    text-align: left;
    line-height: 1.5;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? "" : grey[100]};
      border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[100]
      };
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `
);

const StyledListbox = styled_mui("ul")(
  ({ theme }) => `
    font-family: Pretendard, sans-serif;
    font-size: 14px;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 180px;
    @media screen and (max-width: 767px) {
      min-width: 150px;
  }
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `
);

const StyledOption = styled_mui(OptionUnstyled)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
    `
);

const StyledPopper = styled_mui(PopperUnstyled)`
    z-index: 1;
  `;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType,
  }),
};
