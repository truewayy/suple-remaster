import React from "react";
import styled from "styled-components"
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled as styled_mui } from '@mui/system';
import PropTypes from 'prop-types';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
    margin: 20px;
`

export const SearchInput = styled.input`
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
        border-color: #5D8BF4;
    }
    &:hover {
        border-color: #5D8BF4;
    }
    @media screen and (max-width: 767px) {
      width: 90%;
      transform: scale(0.92);
      ::placeholder {
        font-size: 13px;
      }
  }
`

export const SelectWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 25px;
    justify-content: space-between;
`

export const MainTextBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const MainText = styled.div`
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
`

export const GrayText = styled.span`
  font-size: 14px;
  text-decoration: underline;
  color: #a3a3a3;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
}
`

export const MobileGrayText = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    font-size: 14px;
    text-decoration: underline;
    color: #a3a3a3;
    cursor: pointer;
    margin-top: 15px;
}
`

export const PaddingBottom = styled.div`
    padding-bottom: 5px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 35px;
    @media screen and (max-width: 1023px) {
      justify-content: ;
  }
    @media screen and (max-width: 767px) {
      justify-content: center;
  }
`

export const NoticeWrapper = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 5px #e0e0e0;
  padding: 40px;
  margin-bottom: 30px;
  &:hover {
      cursor: pointer;
      border: 1px solid rgba(102, 186, 255, 0.4);
      box-shadow: 0px 0px 20px 10px rgba(102, 186, 255, 0.4);
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
}
`

export const NoticeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &#bottom {
    justify-content: flex-end;
  }
`

export const NoticeImg = styled.img`
  width: 70px; 
  height: 70px; 
  transform: rotate(10deg);
  @media screen and (max-width: 767px) {
    width: 60px;
    height: 60px; 
`

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  
  const grey = {
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };
  
  const StyledButton = styled_mui('button')(
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
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 2px solid ${theme.palette.mode === 'dark' ? grey[800] : '#00a0e9'};
    border-radius: 0.75em;
    margin-top: 15px;
    padding: 10px;
    padding-left: 20px;
    text-align: left;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
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
    `,
  );
  
  const StyledListbox = styled_mui('ul')(
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
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `,
  );
  
  export const StyledOption = styled_mui(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
  );
  
  const StyledPopper = styled_mui(PopperUnstyled)`
    z-index: 1;
  `;
  
  export const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
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