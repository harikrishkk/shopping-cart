import tw from 'tailwind-styled-components';

const OfficeWrapper = tw.div`
w-full
md:w-2/3 
collapse 
border 
border-base-300 
bg-base-100 
collapse-arrow 
mb-4
`;
export default OfficeWrapper;

export const OfficeHeader = tw.div`
collapse-title 
text-xl 
font-medium
`;

export const OfficeContent = tw.div`
p-4
`;
