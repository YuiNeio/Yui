import { TypeAnimation } from 'react-type-animation';

export default function TypedAnim() {
    return (
        <TypeAnimation
            sequence={[
                "We learn Cyber Security",
                2000,
                "We learn Networking",
                2000,
                "We learn Cinematography",
                2000,
                "We learn Web Developer",
                2000,
                "We learn Design Grafis",
                2000,
            ]}
            speed={50}
            repeat={Infinity}
        />
    )
}