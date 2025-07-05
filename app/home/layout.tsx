import React from "react";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className="px-10 py-5">{children}</div>;
};

export default layout;
