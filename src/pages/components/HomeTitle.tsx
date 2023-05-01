const HomeTitle = ({children}: React.PropsWithChildren) => {
    return ( 
        <div className="w-full py-6 bg-gradient-to-br from-slate-400/20 to-slate-600/20">
            <h2 className="px-10"> 
                {children}
            </h2>
        </div>
    );
}
 
export default HomeTitle;