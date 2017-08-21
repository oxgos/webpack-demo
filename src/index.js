import _ from 'lodash'
import './style.css'
import Avatar from './avatar.png'
import Data from './data.xml'

function component () {
	let element = document.createElement('div')
	let icon = document.createElement('span')
	icon.classList.add('icon-web')
	// Lodash，现在由此脚本导入
	element.innerHTML = _.join(['Hello', 'Webpack','again'], '~')
	element.classList.add('hello')

	// 将图像添加到我们现有的 div
	let myAvatar = new Image()
	myAvatar.src = Avatar
	element.appendChild(icon)
	element.appendChild(myAvatar)
	
	console.log(Data)

	return element
}

document.body.appendChild(component())