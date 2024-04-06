 
interface TabType {
    isTabActive?: boolean;
    tabLabel: string;
    tabName: string;
    onClick?: () => void;
    colorActive: string;
    colorInactive: string;
  }
  
  export function Tab({ isTabActive, tabLabel,tabName, onClick ,colorActive,colorInactive}: TabType) {
    return (
      <button
        onClick={onClick}
        className={isTabActive ? colorActive:colorInactive}
      >
          <div className="flex flex-col  md:py-2">
          <p  className=" font-extrabold text-[20px] md:text-[30px] drop-shadow-lg">
          {tabLabel}
          </p>
        <p className="hidden font-semibold  text-balance text-[12px] px-2 md:block "> {tabName}</p> 
          </div>
          
      </button>
    );
  }