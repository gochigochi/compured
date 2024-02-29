export const SearchSvg = ({ width, height, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    )
}

export const RightArrowSvg = ({ props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    )
}

export const LeftArrowSvg = ({ props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
        </svg>
    )
}

export const CartSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
    )
}

export const CheckSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67e752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}

export const FailedSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d2284c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    )
}

export const WhatsSvg = ({ width, height, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill={color} width="0" height="0" viewBox="0 0 30 30" style={{ "width": width, "height": height }}>
            <g>
                <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017   c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382   c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076   c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427   c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437   c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536   c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609   c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611   c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787   c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739   C23.307,19.268,23.307,18.533,23.214,18.38z" />
            </g>
        </svg>
    )
}

export const PlusSvg = ({ width, height, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    )
}

export const PhoneSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}

export const MailSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
        </svg>
    )
}

export const LocationSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
    )
}

export const MenuSvg = ({ width, height, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="21" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="21" y1="18" x2="3" y2="18" />
        </svg>
    )
}

export const FacebookSvg = ({ width, height, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={height} height={width} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}

export const IgSvg = ({ width, height, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    )
}

export const ListSvg = ({ width, height, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
    )
}

export const OrderSvg = ({ width, height, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="7" height="7" />
            <rect x="14" y="4" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
        </svg>
    )
}

export const MobileSvg = ({ width, height, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path d="M16 3.25H8C7.04 3.25 6.25 4.04 6.25 5V19C6.25 19.96 7.04 20.75 8 20.75H16C16.96 20.75 17.75 19.96 17.75 19V5C17.75 4.04 16.96 3.25 16 3.25ZM16.25 19C16.25 19.14 16.14 19.25 16 19.25H8C7.86 19.25 7.75 19.14 7.75 19V5C7.75 4.86 7.86 4.75 8 4.75H16C16.14 4.75 16.25 4.86 16.25 5V19ZM13 16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15C12.55 15 13 15.45 13 16Z" fill="#000000" />
        </svg>
    )
}

export const DesktopSvg = ({ width, height, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path d="M19 16.75H5C4.53668 16.7474 4.09309 16.5622 3.76546 16.2345C3.43784 15.9069 3.25263 15.4633 3.25 15V5C3.25263 4.53668 3.43784 4.09309 3.76546 3.76546C4.09309 3.43784 4.53668 3.25263 5 3.25H19C19.4633 3.25263 19.9069 3.43784 20.2345 3.76546C20.5622 4.09309 20.7474 4.53668 20.75 5V15C20.7474 15.4633 20.5622 15.9069 20.2345 16.2345C19.9069 16.5622 19.4633 16.7474 19 16.75ZM5 4.75C4.9337 4.75 4.87011 4.77634 4.82322 4.82322C4.77634 4.87011 4.75 4.9337 4.75 5V15C4.75 15.0663 4.77634 15.1299 4.82322 15.1768C4.87011 15.2237 4.9337 15.25 5 15.25H19C19.0663 15.25 19.1299 15.2237 19.1768 15.1768C19.2237 15.1299 19.25 15.0663 19.25 15V5C19.25 4.9337 19.2237 4.87011 19.1768 4.82322C19.1299 4.77634 19.0663 4.75 19 4.75H5Z" fill="#000000" />
            <path d="M15 20.75H12C11.8019 20.7474 11.6126 20.6676 11.4725 20.5275C11.3324 20.3874 11.2526 20.1981 11.25 20V16C11.25 15.8011 11.329 15.6103 11.4697 15.4697C11.6103 15.329 11.8011 15.25 12 15.25C12.1989 15.25 12.3897 15.329 12.5303 15.4697C12.671 15.6103 12.75 15.8011 12.75 16V19.25H15C15.1989 19.25 15.3897 19.329 15.5303 19.4697C15.671 19.6103 15.75 19.8011 15.75 20C15.75 20.1989 15.671 20.3897 15.5303 20.5303C15.3897 20.671 15.1989 20.75 15 20.75Z" fill="#000000" />
            <path d="M12 20.75H9C8.80109 20.75 8.61032 20.671 8.46967 20.5303C8.32902 20.3897 8.25 20.1989 8.25 20C8.25 19.8011 8.32902 19.6103 8.46967 19.4697C8.61032 19.329 8.80109 19.25 9 19.25H12C12.1989 19.25 12.3897 19.329 12.5303 19.4697C12.671 19.6103 12.75 19.8011 12.75 20C12.75 20.1989 12.671 20.3897 12.5303 20.5303C12.3897 20.671 12.1989 20.75 12 20.75Z" fill="#000000" />
        </svg>
    )
}