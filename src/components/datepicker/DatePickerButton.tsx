import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

type DatePickerProps = {
  className?: string;
  onChange?: (date: Date) => void;
  disablePastDates?: boolean; // New prop to enable/disable past date selection
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  width: 200px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  background-color: white;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
  cursor: pointer;
  &:focus {
    border-color: #ed8822;
    box-shadow: 0 0 0 2px rgba(237, 136, 34, 0.2);
  }
`;

const Calendar = styled.div`
  position: absolute;
  top: 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.div`
  display: flex;
  gap: 8px;
`;

const CustomSelect = styled.div`
  position: relative;
  width: 100%;
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 8px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #ed8822;
  }
`;

const OptionsContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px; /* Set a max height for the dropdown */
  overflow-y: auto; /* Enable vertical scrolling */
  border: 1px solid #e6e6e6;
  background-color: white;
  z-index: 10;
`;

const Option = styled.div<{ isSelected: boolean }>`
  padding: 8px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "#ed8822" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  &:hover {
    background-color: #ed8822;
    color: white;
  }
`;

const DateButton = styled.button<{ isSelected: boolean; isDisabled: boolean }>`
  padding: 6px;
  margin: 2px;
  background-color: ${({ isSelected }) => (isSelected ? "#ed8822" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  border: none;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  border-radius: 4px;
  transition: all 0.2s ease;
  opacity: ${({ isDisabled }) =>
    isDisabled ? 0.5 : 1}; /* Disable past dates visually */

  &:hover {
    background-color: ${({ isDisabled }) =>
      isDisabled ? "transparent" : "#ed8822"};
    color: ${({ isDisabled }) => (isDisabled ? "black" : "white")};
  }
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
`;

const DatePickerButton: React.FC<DatePickerProps> = ({
  className,
  onChange,
  disablePastDates = false,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [isMonthSelectOpen, setIsMonthSelectOpen] = useState(false);
  const [isYearSelectOpen, setIsYearSelectOpen] = useState(false);

  const calendarRef = useRef<HTMLDivElement>(null);
  const currentDate = new Date(); // Current date to compare against

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const handleDateSelect = (day: number) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
    setIsOpen(false);
    if (onChange) onChange(newDate);
  };

  const handleMonthChange = (newMonth: number) => {
    setMonth(newMonth);
    setIsMonthSelectOpen(false);
  };

  const handleYearChange = (newYear: number) => {
    setYear(newYear);
    setIsYearSelectOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper className={className}>
      <Button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        Select a date
      </Button>
      {isOpen && (
        <Calendar ref={calendarRef}>
          <Header>
            <CustomSelect>
              <SelectButton
                onClick={() => setIsMonthSelectOpen(!isMonthSelectOpen)}
              >
                {new Date(0, month).toLocaleString("default", {
                  month: "long",
                })}
              </SelectButton>
              <OptionsContainer isVisible={isMonthSelectOpen}>
                {Array.from({ length: 12 }, (_, i) => (
                  <Option
                    key={i}
                    isSelected={month === i}
                    onClick={() => handleMonthChange(i)}
                  >
                    {new Date(0, i).toLocaleString("default", {
                      month: "long",
                    })}
                  </Option>
                ))}
              </OptionsContainer>
            </CustomSelect>
            <CustomSelect>
              <SelectButton
                onClick={() => setIsYearSelectOpen(!isYearSelectOpen)}
              >
                {year}
              </SelectButton>
              <OptionsContainer isVisible={isYearSelectOpen}>
                {Array.from({ length: 10 }, (_, i) => (
                  <Option
                    key={i}
                    isSelected={year === year - 5 + i}
                    onClick={() => handleYearChange(year - 5 + i)}
                  >
                    {year - 5 + i}
                  </Option>
                ))}
              </OptionsContainer>
            </CustomSelect>
          </Header>
          <DaysGrid>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, index) => (
                <div
                  key={index}
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  {day}
                </div>
              ),
            )}
          </DaysGrid>
          <DaysGrid>
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={index}></div>
            ))}
            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1;
              const isPastDate = new Date(year, month, day) < currentDate; // Check if the date is in the past
              const isToday =
                new Date(year, month, day).toDateString() ===
                currentDate.toDateString(); // Check if the date is today
              const isDisabled = disablePastDates && isPastDate && !isToday; // Apply disable logic based on the prop
              return (
                <DateButton
                  key={i}
                  isSelected={selectedDate?.getDate() === day}
                  isDisabled={isDisabled} // Disable button for past dates
                  onClick={() => !isDisabled && handleDateSelect(day)} // Only call if not a past date
                >
                  {day}
                </DateButton>
              );
            })}
          </DaysGrid>
        </Calendar>
      )}
    </Wrapper>
  );
};

export default DatePickerButton;
