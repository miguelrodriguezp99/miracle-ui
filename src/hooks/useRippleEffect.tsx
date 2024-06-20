/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

type Props = {
    ref: React.RefObject<HTMLElement>;
    disabledRipple?: boolean;
    isClickable?: boolean;
};

const useRippleEffect = ({ disabledRipple, isClickable = true, ref }: Props) => {
    useEffect(() => {
        if (disabledRipple) return;
        if (!isClickable) return;

        const handleClick = (e: MouseEvent) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripples = document.createElement('span');
            ripples.className = "ripple";
            ripples.style.left = `${x}px`;
            ripples.style.top = `${y}px`;
            ref.current.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 1000);
        };

        ref.current?.addEventListener('click', handleClick);

        return () => {
            ref.current?.removeEventListener('click', handleClick);
        };
    }, [disabledRipple, ref]);
};

export default useRippleEffect;
