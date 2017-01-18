import React from "react"
import rgba  from "../__lib__/unit_to_rgba"
import pathTransformer from "./pathTransformer"


export default props => <path {...{
    d:           pathTransformer(props.Matrix, props.Geometry),
    stroke:      rgba(props.StrokeColor),
    strokeWidth: props.StrokeThickness,
    fill:        rgba(props.FillColor),
  }} />
