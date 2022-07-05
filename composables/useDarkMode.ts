const useDarkMode = () => {
    const isDarkMode = useState('dark mode', ()=>true);


    const toggleDarkMode =()=> {
        isDarkMode.value = !isDarkMode.value
    }

    return{
        isDarkMode,
        toggleDarkMode,
    }
}

export default useDarkMode;