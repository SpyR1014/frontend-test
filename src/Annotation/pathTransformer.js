import xform_point from "../__lib__/xform_point"
import {bind} from "../__lib__/seq"

export const splitSVG = d => d.slice(1).length > 0
                    ? [d[0]].concat(d.slice(1).split(","))
                    : [d[0]]

export const parseForXform = d => ({
    ...d[1] && {x: Number(d[1])},
    ...d[2] && {y: Number(d[2])},
    ...d[0] && {type: d[0]}
})
export const flattenXform = ({x, y, type}) => `${type}${x ? x : ""}${x && y ? ",":""}${y ? y : ""}`

export default (matrix, geometry) => {

    const ops = [splitSVG, parseForXform, xform_point(matrix), flattenXform]

    return geometry.split(" ").map(v => bind(v, ops)).join(" ")

}