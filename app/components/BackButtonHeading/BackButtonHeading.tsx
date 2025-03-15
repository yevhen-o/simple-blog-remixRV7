"use client";
import { Link } from "@src/utils";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { ArrowLeft } from "@src/components/Icons";
import "./BackButtonHeading.scss";

export function BackButtonHeading({
  children,
  Tag = "h1",
  className,
}: {
  children: React.ReactNode;
  Tag?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}) {
  const navigate = useNavigate();
  return (
    <div className={classNames("bb-heading__wrapper", className)}>
      <Link title="Go back" onClick={() => navigate(-1)} to="#">
        <ArrowLeft size={24} />
      </Link>
      <Tag>{children}</Tag>
    </div>
  );
}
