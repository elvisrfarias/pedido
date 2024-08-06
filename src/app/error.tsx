'use client'
import { Button, Result } from "antd";

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Algo deu errado!! 😪"
            extra={<Button type="primary" onClick={() => reset()}>Tentar novamente</Button>}
        />
    )
}

export default Error;