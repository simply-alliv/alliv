import React, { FunctionComponent } from "react"

interface CardTitleProps {
  title: string
  subtitle?: string
}

export const CardTitle: FunctionComponent<CardTitleProps> = props => {
  return (
    <div className="flex flex__column">
      <h3>{props.title}</h3>
      {props.subtitle ? <p>{props.subtitle}</p> : null}
    </div>
  )
}
