import type { TabsProps } from "antd";
import { Tabs } from "antd";
import useHooks from "shared/hooks/useHooks";
interface IProp {
    tabs: object[];
    tabKey?: string;
    isClearable?: boolean;
    className?: string;
    defaultKey?: string;
    handleClick?: (key: string) => void;
}
const Tab = (props: IProp) => {
    const { navigate, qs, query, get, } = useHooks();
    const {
        tabs,
        tabKey = "key",
        isClearable = false,
        className,
        defaultKey,
        handleClick,
    } = props;

    const items = tabs?.map((elem: any) => {
        return {
            label: elem.label,
            key: elem.key,
            children: elem.children,
        };
    });

    const defaultActiveTabKey = get(query, tabKey,defaultKey) ;


    const renderTabBar: TabsProps["renderTabBar"] = (props, DefaultTabBar) => (
        <DefaultTabBar
            {...props}
            className={
                tabs
                    ? `${className} bg-white px-[24px] !m-[0px] pt-[8px]  rounded-t-[8px] [&_.ant-tabs-tab-btn]:px-[40px] [&_.ant-tabs-tab-btn]:text-[#4d4d4d] [&_.ant-tabs-tab-btn]:text-[20px] [&_.ant-tabs-tab-btn]:not-italic [&_.ant-tabs-tab-btn]:font-semibold [&_.ant-tabs-tab-btn]:leading-[28px] before:!border-b-[#E1E1E1]`
                    : `${className}`
            }
        />
    );

    return (
        <Tabs
            onChange={(key) => {
                if (handleClick) {
                    handleClick(key);
                } else {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    isClearable
                        ? navigate({ search: qs.stringify({ [tabKey]: key }) })
                        : navigate({ search: qs.stringify({ ...query, [tabKey]: key }) });
                }
            }}
            activeKey={defaultActiveTabKey as string}
            defaultActiveKey={defaultActiveTabKey as string}
            renderTabBar={renderTabBar}
            items={items}
        />
    );
};
export default Tab;