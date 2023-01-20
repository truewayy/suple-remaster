import styled from "@emotion/styled";

const OptionSelect = ({
  list,
  state,
  controller,
  itemTitle,
  part,
  setPart,
}) => {
  const selectedOption = list.find((row) => row.option === part);
  const OptionName = selectedOption[itemTitle];

  const handleSelect = (option) => {
    setPart(option);
  };

  return (
    <OptionBox
      select={state}
      onClick={(e) => {
        e.stopPropagation();
        controller(!state);
      }}
    >
      <SelectedOption>{OptionName}</SelectedOption>
      <Arrows src={`icon_${state ? "up" : "down"}_arrow_solid_24.svg`} />
      {state && (
        <Options>
          {list.map((option) => {
            return (
              <Option
                id={option[itemTitle] === OptionName ? "selected" : undefined}
                key={option.name}
                onClick={() => handleSelect(option.option)}
              >
                {option[itemTitle]}
              </Option>
            );
          })}
        </Options>
      )}
    </OptionBox>
  );
};

export default OptionSelect;

const Options = styled.ul`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #fff;
  padding: 5px;
  min-width: 150px;
  cursor: default;
`;

const Option = styled.li`
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #e7ebf0;
  }
  &#selected {
    background-color: #daecff;
  }
`;

const SelectedOption = styled.span`
  padding-right: 20px;
  font-size: 14px;
  font-weight: 500;
`;
const Arrows = styled.img`
  position: absolute;
  right: 9px;
  bottom: 10px;
`;

const OptionBox = styled.div`
  z-index: 1;
  margin-top: auto;
  border: 2px solid #00a0e9;
  border-radius: 10px;
  padding: 9px;
  min-width: 140px;
  position: relative;
  cursor: default;
  ${({ select }) =>
    !select &&
    `  &:hover {
    background-color: #e7ebf0;
    border-color: #b2bac2;
  }
`}
  @media (max-width: 767px) {
    margin-bottom: auto;
  }
`;
