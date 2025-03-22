/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   getUserData: () => (/* binding */ getUserData),\n/* harmony export */   isUserLoggedIn: () => (/* binding */ isUserLoggedIn),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    user: null,\n    login: ()=>{},\n    logout: ()=>{},\n    isLoading: true\n});\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n// Helper function to check if user is logged in\nconst isUserLoggedIn = ()=>{\n    if (true) return false;\n    try {\n        const storedUser = localStorage.getItem(\"parkAndRideUser\");\n        if (!storedUser) return false;\n        const parsedUser = JSON.parse(storedUser);\n        return !!parsedUser?.isLoggedIn;\n    } catch (error) {\n        console.error(\"Error checking auth state:\", error);\n        return false;\n    }\n};\n// Helper function to get user data\nconst getUserData = ()=>{\n    if (true) return null;\n    try {\n        const storedUser = localStorage.getItem(\"parkAndRideUser\");\n        if (!storedUser) return null;\n        return JSON.parse(storedUser);\n    } catch (error) {\n        console.error(\"Error getting user data:\", error);\n        return null;\n    }\n};\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Check if user is logged in on initial load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkUserLoggedIn = ()=>{\n            // If we're in the browser, check localStorage\n            if (false) {}\n            setIsLoading(false);\n        };\n        checkUserLoggedIn();\n    }, []);\n    // Login function to store user data\n    const login = (userData)=>{\n        if (!userData) return;\n        const loggedInUser = {\n            ...userData,\n            isLoggedIn: true\n        };\n        localStorage.setItem(\"parkAndRideUser\", JSON.stringify(loggedInUser));\n        setUser(loggedInUser);\n    };\n    // Logout function\n    const logout = ()=>{\n        localStorage.removeItem(\"parkAndRideUser\");\n        setUser(null);\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout,\n            isLoading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\punya\\\\OneDrive\\\\Desktop\\\\Park and Ride\\\\frontend\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtGO0FBQzFDO0FBZXhDLE1BQU1LLDRCQUFjTCxvREFBYUEsQ0FBa0I7SUFDakRNLE1BQU07SUFDTkMsT0FBTyxLQUFPO0lBQ2RDLFFBQVEsS0FBTztJQUNmQyxXQUFXO0FBQ2I7QUFFTyxNQUFNQyxVQUFVLElBQU1ULGlEQUFVQSxDQUFDSSxhQUFhO0FBTXJELGdEQUFnRDtBQUN6QyxNQUFNTSxpQkFBaUI7SUFDNUIsSUFBSSxJQUFrQixFQUFhLE9BQU87SUFFMUMsSUFBSTtRQUNGLE1BQU1DLGFBQWFDLGFBQWFDLE9BQU8sQ0FBQztRQUN4QyxJQUFJLENBQUNGLFlBQVksT0FBTztRQUV4QixNQUFNRyxhQUFhQyxLQUFLQyxLQUFLLENBQUNMO1FBQzlCLE9BQU8sQ0FBQyxDQUFDRyxZQUFZRztJQUN2QixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBTztJQUNUO0FBQ0YsRUFBRTtBQUVGLG1DQUFtQztBQUM1QixNQUFNRSxjQUFjO0lBQ3pCLElBQUksSUFBa0IsRUFBYSxPQUFPO0lBRTFDLElBQUk7UUFDRixNQUFNVCxhQUFhQyxhQUFhQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDRixZQUFZLE9BQU87UUFFeEIsT0FBT0ksS0FBS0MsS0FBSyxDQUFDTDtJQUNwQixFQUFFLE9BQU9PLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsT0FBTztJQUNUO0FBQ0YsRUFBRTtBQUVLLE1BQU1HLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQXFCO0lBQzFELE1BQU0sQ0FBQ2pCLE1BQU1rQixRQUFRLEdBQUdyQiwrQ0FBUUEsQ0FBTztJQUN2QyxNQUFNLENBQUNNLFdBQVdnQixhQUFhLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNdUIsU0FBU3RCLHNEQUFTQTtJQUV4Qiw2Q0FBNkM7SUFDN0NGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXlCLG9CQUFvQjtZQUN4Qiw4Q0FBOEM7WUFDOUMsSUFBSSxLQUFrQixFQUFhLEVBWWxDO1lBQ0RGLGFBQWE7UUFDZjtRQUVBRTtJQUNGLEdBQUcsRUFBRTtJQUVMLG9DQUFvQztJQUNwQyxNQUFNcEIsUUFBUSxDQUFDc0I7UUFDYixJQUFJLENBQUNBLFVBQVU7UUFFZixNQUFNQyxlQUFlO1lBQ25CLEdBQUdELFFBQVE7WUFDWFgsWUFBWTtRQUNkO1FBRUFMLGFBQWFrQixPQUFPLENBQUMsbUJBQW1CZixLQUFLZ0IsU0FBUyxDQUFDRjtRQUN2RE4sUUFBUU07SUFDVjtJQUVBLGtCQUFrQjtJQUNsQixNQUFNdEIsU0FBUztRQUNiSyxhQUFhZSxVQUFVLENBQUM7UUFDeEJKLFFBQVE7UUFDUkUsT0FBT08sSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQzVCLFlBQVk2QixRQUFRO1FBQUNDLE9BQU87WUFBRTdCO1lBQU1DO1lBQU9DO1lBQVFDO1FBQVU7a0JBQzNEYzs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcmstYW5kLXJpZGUvLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4PzFmYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG50eXBlIFVzZXIgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgaXNMb2dnZWRJbjogYm9vbGVhbjtcbn0gfCBudWxsO1xuXG5pbnRlcmZhY2UgQXV0aENvbnRleHRUeXBlIHtcbiAgdXNlcjogVXNlcjtcbiAgbG9naW46ICh1c2VyRGF0YTogT21pdDxVc2VyLCAnaXNMb2dnZWRJbic+KSA9PiB2b2lkO1xuICBsb2dvdXQ6ICgpID0+IHZvaWQ7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0VHlwZT4oe1xuICB1c2VyOiBudWxsLFxuICBsb2dpbjogKCkgPT4ge30sXG4gIGxvZ291dDogKCkgPT4ge30sXG4gIGlzTG9hZGluZzogdHJ1ZVxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbmludGVyZmFjZSBBdXRoUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBpZiB1c2VyIGlzIGxvZ2dlZCBpblxuZXhwb3J0IGNvbnN0IGlzVXNlckxvZ2dlZEluID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcbiAgXG4gIHRyeSB7XG4gICAgY29uc3Qgc3RvcmVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXJrQW5kUmlkZVVzZXInKTtcbiAgICBpZiAoIXN0b3JlZFVzZXIpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBwYXJzZWRVc2VyID0gSlNPTi5wYXJzZShzdG9yZWRVc2VyKTtcbiAgICByZXR1cm4gISFwYXJzZWRVc2VyPy5pc0xvZ2dlZEluO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGF1dGggc3RhdGU6JywgZXJyb3IpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB1c2VyIGRhdGFcbmV4cG9ydCBjb25zdCBnZXRVc2VyRGF0YSA9ICgpOiBVc2VyID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgXG4gIHRyeSB7XG4gICAgY29uc3Qgc3RvcmVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXJrQW5kUmlkZVVzZXInKTtcbiAgICBpZiAoIXN0b3JlZFVzZXIpIHJldHVybiBudWxsO1xuICAgIFxuICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZFVzZXIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgdXNlciBkYXRhOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIENoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluIG9uIGluaXRpYWwgbG9hZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gKCkgPT4ge1xuICAgICAgLy8gSWYgd2UncmUgaW4gdGhlIGJyb3dzZXIsIGNoZWNrIGxvY2FsU3RvcmFnZVxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFya0FuZFJpZGVVc2VyJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoc3RvcmVkVXNlcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRVc2VyID0gSlNPTi5wYXJzZShzdG9yZWRVc2VyKTtcbiAgICAgICAgICAgIHNldFVzZXIocGFyc2VkVXNlcik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBwYXJzZSB1c2VyIGZyb20gbG9jYWxTdG9yYWdlJywgZXJyb3IpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BhcmtBbmRSaWRlVXNlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY2hlY2tVc2VyTG9nZ2VkSW4oKTtcbiAgfSwgW10pO1xuXG4gIC8vIExvZ2luIGZ1bmN0aW9uIHRvIHN0b3JlIHVzZXIgZGF0YVxuICBjb25zdCBsb2dpbiA9ICh1c2VyRGF0YTogT21pdDxVc2VyLCAnaXNMb2dnZWRJbic+KSA9PiB7XG4gICAgaWYgKCF1c2VyRGF0YSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IHtcbiAgICAgIC4uLnVzZXJEYXRhLFxuICAgICAgaXNMb2dnZWRJbjogdHJ1ZVxuICAgIH07XG4gICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhcmtBbmRSaWRlVXNlcicsIEpTT04uc3RyaW5naWZ5KGxvZ2dlZEluVXNlcikpO1xuICAgIHNldFVzZXIobG9nZ2VkSW5Vc2VyKTtcbiAgfTtcblxuICAvLyBMb2dvdXQgZnVuY3Rpb25cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwYXJrQW5kUmlkZVVzZXInKTtcbiAgICBzZXRVc2VyKG51bGwpO1xuICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIGxvZ291dCwgaXNMb2FkaW5nIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59OyAiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwidXNlciIsImxvZ2luIiwibG9nb3V0IiwiaXNMb2FkaW5nIiwidXNlQXV0aCIsImlzVXNlckxvZ2dlZEluIiwic3RvcmVkVXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZWRVc2VyIiwiSlNPTiIsInBhcnNlIiwiaXNMb2dnZWRJbiIsImVycm9yIiwiY29uc29sZSIsImdldFVzZXJEYXRhIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRVc2VyIiwic2V0SXNMb2FkaW5nIiwicm91dGVyIiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJyZW1vdmVJdGVtIiwidXNlckRhdGEiLCJsb2dnZWRJblVzZXIiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// Pages that don't require authentication\nconst publicPages = [\n    \"/login\",\n    \"/\",\n    \"/pricing\"\n];\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    // Simulate initial loading\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setIsLoading(false);\n    }, []);\n    // Simple redirect for authentication\n    const checkAuthAndRedirect = ()=>{\n        // Skip auth check for public pages\n        if (publicPages.includes(router.pathname)) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punya\\\\OneDrive\\\\Desktop\\\\Park and Ride\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 24,\n                columnNumber: 14\n            }, this);\n        }\n        // For pages requiring auth, the individual page will handle the redirect\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\punya\\\\OneDrive\\\\Desktop\\\\Park and Ride\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, this);\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punya\\\\OneDrive\\\\Desktop\\\\Park and Ride\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\punya\\\\OneDrive\\\\Desktop\\\\Park and Ride\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Park & Ride | Modern Transportation Solution\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punya\\\\OneDrive\\\\Desktop\\\\Park and Ride\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A modern park and ride booking system with real-time tracking\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punya\\\\OneDrive\\\\Desktop\\\\Park and Ride\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punya\\\\OneDrive\\\\Desktop\\\\Park and Ride\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punya\\\\OneDrive\\\\Desktop\\\\Park and Ride\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punya\\\\OneDrive\\\\Desktop\\\\Park and Ride\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            checkAuthAndRedirect()\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\punya\\\\OneDrive\\\\Desktop\\\\Park and Ride\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVEO0FBQ3lCO0FBQ2Q7QUFDSTtBQUU1QywwQ0FBMEM7QUFDMUMsTUFBTUssY0FBYztJQUFDO0lBQVU7SUFBSztDQUFXO0FBRWhDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQywyQkFBMkI7SUFDM0JELGdEQUFTQSxDQUFDO1FBQ1JRLGFBQWE7SUFDZixHQUFHLEVBQUU7SUFFTCxxQ0FBcUM7SUFDckMsTUFBTUMsdUJBQXVCO1FBQzNCLG1DQUFtQztRQUNuQyxJQUFJUCxZQUFZUSxRQUFRLENBQUNKLE9BQU9LLFFBQVEsR0FBRztZQUN6QyxxQkFBTyw4REFBQ1A7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7O1FBQ2pDO1FBRUEseUVBQXlFO1FBQ3pFLHFCQUFPLDhEQUFDRDtZQUFXLEdBQUdDLFNBQVM7Ozs7OztJQUNqQztJQUVBLElBQUlFLFdBQVc7UUFDYixxQkFDRSw4REFBQ0s7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7O0lBR3JCO0lBRUEscUJBQ0UsOERBQUNmLCtEQUFZQTs7MEJBQ1gsOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUNpQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7WUFFdkJYOzs7Ozs7O0FBR1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXJrLWFuZC1yaWRlLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dHMvQXV0aENvbnRleHQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gUGFnZXMgdGhhdCBkb24ndCByZXF1aXJlIGF1dGhlbnRpY2F0aW9uXG5jb25zdCBwdWJsaWNQYWdlcyA9IFsnL2xvZ2luJywgJy8nLCAnL3ByaWNpbmcnXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBTaW11bGF0ZSBpbml0aWFsIGxvYWRpbmdcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgLy8gU2ltcGxlIHJlZGlyZWN0IGZvciBhdXRoZW50aWNhdGlvblxuICBjb25zdCBjaGVja0F1dGhBbmRSZWRpcmVjdCA9ICgpID0+IHtcbiAgICAvLyBTa2lwIGF1dGggY2hlY2sgZm9yIHB1YmxpYyBwYWdlc1xuICAgIGlmIChwdWJsaWNQYWdlcy5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpKSB7XG4gICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbiAgICB9XG5cbiAgICAvLyBGb3IgcGFnZXMgcmVxdWlyaW5nIGF1dGgsIHRoZSBpbmRpdmlkdWFsIHBhZ2Ugd2lsbCBoYW5kbGUgdGhlIHJlZGlyZWN0XG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG4gIH07XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTEyIHctMTIgYm9yZGVyLXQtMiBib3JkZXItYi0yIGJvcmRlci1wcmltYXJ5LTYwMFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UGFyayAmIFJpZGUgfCBNb2Rlcm4gVHJhbnNwb3J0YXRpb24gU29sdXRpb248L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQSBtb2Rlcm4gcGFyayBhbmQgcmlkZSBib29raW5nIHN5c3RlbSB3aXRoIHJlYWwtdGltZSB0cmFja2luZ1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtjaGVja0F1dGhBbmRSZWRpcmVjdCgpfVxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufSAiXSwibmFtZXMiOlsiSGVhZCIsIkF1dGhQcm92aWRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicHVibGljUGFnZXMiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjaGVja0F1dGhBbmRSZWRpcmVjdCIsImluY2x1ZGVzIiwicGF0aG5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();