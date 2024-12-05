function App() {
    return (
        <>
            <div className="flex items-center justify-center gap-4">
                <div className="skew-10deg">Hi</div>
                <div>Mom</div>
            </div>

            <div className="repel">
                <h1>Hey</h1>
            </div>

            <div className="attract">
                <div className="repel">
                    <h1>Hey</h1>
                </div>
            </div>

            <div className="repel">
                <div className="inflate-v inflate-h-[700px] repel-i">
                    <div className="attract bg-red-500">
                        <div>Hey</div>
                    </div>

                    <div className="repel">
                        <h1 className="bg-blue-500">Hey</h1>
                    </div>

                    <div className="attract-r">
                        <div className="inflate-h-[300px] attract repel-[10px] bg-green-500">
                            <h1 className="inflate-h">Header</h1>
                            <div className="inflate-h">Body</div>
                        </div>
                    </div>

                    <div className="repel-i-[10px] repel-[10px] bg-yellow-500">
                        <div className="inflate-h-[100px] bg-red-500">aa</div>
                        <div className="inflate-h-[60px] bg-green-500">aaa</div>
                        <div className="inflate-h-[200px] bg-blue-500">aaaa</div>
                    </div>
                </div>
            </div>

            <div className="repel">
                <div className="inflate-h-[700px] attract repel-i-[10px]">
                    <div className="inflate-h-[300px] attract repel-[10px] bg-green-500">
                        <h1 className="inflate-h">Header</h1>
                        <div className="inflate-h">Body</div>
                    </div>
                    <div className="inflate-h-[300px] attract repel-[10px] bg-green-500">
                        <h1 className="inflate-h">Header</h1>
                        <div className="inflate-h">Body</div>
                    </div>
                </div>
            </div>

            <div className="repel">
                <div className="inflate-h-[700px] attract repel-i-[10px]">
                    <div className="attract repel-[10px] bg-green-500">
                        <h1 className="inflate-h">Header</h1>
                        <div className="inflate-h">Body</div>
                    </div>
                    <div className="attract repel-[10px] bg-green-500">
                        <h1 className="inflate-h">Header</h1>
                        <div className="inflate-h">Body</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
