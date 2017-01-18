import pathTransformer, {splitSVG, parseForXform, flattenXform} from './pathTransformer'

it("splitSVG", () => {
    expect(splitSVG("M100,200")).toEqual(["M", "100", "200"])
    expect(splitSVG("Z")).toEqual(["Z"])
    expect(splitSVG("L5,20")).toEqual(["L", "5", "20"])
})

it("parseForXform", () => {
    expect(parseForXform(["M", "100", "200"])).toEqual({x: 100, y: 200, type: "M"})
    expect(parseForXform(["Z"])).toEqual({type: "Z"})
})

it("flattenXform", () => {
    expect(flattenXform({x: 100, y: 200, type: "M"})).toEqual("M100,200");
    expect(flattenXform({type: "Z"})).toEqual("Z");
})

it("pathTransformer", () => {
    const Geometry1 = "M100,100 L400,100 L400,400 L100,400 Z"
    const Geometry2 = "M200,200 L600,500"
    const Matrix1 = [2,0,0,1,0,0]
    const Matrix2 = [1,0,0,0.5,0,0]
    expect(pathTransformer(Matrix1, Geometry1)).toEqual("M200,100 L800,100 L800,400 L200,400 Z")
    expect(pathTransformer(Matrix2, Geometry2)).toEqual("M200,100 L600,250")

})
