declare module '*.html' {
    const content: string
    export default content
}
declare module '*.css' {
    const content: string
    export default content
}
declare module '*.min' {
    const content: any
    export default content
}
declare module '*.txt' {
    const content: any
    export default content
}
declare module '*.js' {
    const content: any
    export default content
}
interface Window {
    ethereum: any;
}
// declare global {
//     interface Window {
//         ethereum: any;
//     }
// }