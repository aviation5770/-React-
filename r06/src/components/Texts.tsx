import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { makeClassName } from "./textUtil";

type TextProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement>;


// 기본 title 컴포넌트
export type TitleProps = TextProps & { numberOfLines?: number };
export const Title: FC<TitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    "font-bold text-5xl text-center whitespace-pre-line",
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};


// 여기부터 Subtitle 컴포넌트
export type SubtitleProps = TitleProps & {}; // Title과 속성 동일

export const Subtitle: FC<SubtitleProps> = ({className: _className, numberOfLines, ...props}) => {
  const className = makeClassName(
    "font-semibold text-3xl text-center whitespace-pre-line",
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};


// 여기부터 ParagraphProps 컴포넌트
export type ParagraphProps = TitleProps & {};

export const Paragraph: FC<ParagraphProps> = ({className: _className, numberOfLines, ...props}) => {
  const className = makeClassName(
    "font-normal text-base whitespace-pre-line",
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};


// 여기부터 Summary 컴포넌트
export type SummaryProps = TitleProps & {};

export const Summary: FC<SummaryProps> = ({className: _className, numberOfLines, ...props}) => {
  const className = makeClassName(
    "text-sm whitespace-pre-line",
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};