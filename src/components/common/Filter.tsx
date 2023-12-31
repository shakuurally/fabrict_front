import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { FilterComponentProps } from "../../interface";

export const FilterComponent: React.FC<FilterComponentProps> = ({ filterTitle, filterType, setFilterTitle, setFilterType }) => {
    return (
        <div className="flex flex-col space-y-4 py-10 ">
            <div className="group relative flex focus:outline-none">
                <Search className="absolute inset-y-0 left-4 z-10 my-auto h-4 w-4 text-gray-500" />
                <input
                    className="w-full rounded-xl border hover:ring-0 outline-none border-gray-200 bg-white dark:bg-gray-800  p-3 pl-12 text-left text-gray-500 dark:text-gray-200 transition-colors group-active:bg-gray-50"
                    value={filterTitle}
                    onChange={(e) => setFilterTitle(e.target.value)}
                    placeholder="👋 Search Movie name..."
                />

                <span className="absolute inset-y-0 right-4 my-auto h-5 text-sm text-gray-400">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="w-full outline-none bg-transparent text-gray-500 dark:text-gray-200"
                        >
                            <option value="">Filter by Type</option>
                            <option value="movie">Movie</option>
                            <option value="game">Game</option>
                        </select>
                    </motion.div>
                </span>
            </div>
        </div>
    );
};
