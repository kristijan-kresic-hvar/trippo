export const generateScript = (src) => {
    const script = document.createElement('script')
    script.setAttribute('src', src)

    console.log(script)
    document.head.appendChild(script)
}