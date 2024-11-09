import { FC } from "react";

export interface TabItemsProps {
  items: string[];
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

export const TabNavigation: FC<TabItemsProps> = ({
  items,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div className="tab-navigation">
      <div className="tab-navigation-container">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`tab-navigation-btn ${
              selectedTab === index ? "active" : ""
            } `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
