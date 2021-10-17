# react-auth

Устанавливаем
npm install react-router-dom formik @mui/material @emotion/react @emotion/styled @mui/icons-material

1. Создаем компоненты форм регистрации и логинизации
2. Создаем компоненты страниц регистрации и логинизации, куда встраиваем компоненты их форм

3. Настраиваем маршрутизацию

## index.js

import { BrowserRouter as Router } from 'react-router-dom'
заворачиваем компонент App в Router

## App.js

import { Suspense, lazy } from 'react'
import { NavLink } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

через lazy асинхронно импортируем компоненты страниц
через NavLink указываем ссылки на страницы с роутами
в Suspense оборачиваем Switch с маршрутами Route
