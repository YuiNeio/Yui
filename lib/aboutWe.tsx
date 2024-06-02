import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';

interface Props {
    Language: string
}

export default function AboutWe() {
    const codeString = `
    package itclub

    import (
        "fmt"
        "io"
        "os"
    )

    func main() {
        filename := os.Args[1]
        f, _ := os.Open(filename)
        defer f.Close()

        buf := make([]byte, 8)
        io.WriteString(os.Stdout, string(buf))
        fmt.Println()
    }
    `;
    return (
        <SyntaxHighlighter language="go" style={nightOwl} customStyle={{
            backgroundColor: "transparent",
            opacity: 1,

        }} >
          {codeString}
        </SyntaxHighlighter>
    );
}