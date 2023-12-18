import { useEffect, useState } from "react";

function useForm() {
    // const [first, setfirst] = useState(second)

    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])


    const input = {
        value: 'Valor',
        setValue: () => { }
    }

    return input;
}
export default useForm