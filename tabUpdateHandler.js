// A chrome extension to add support to use Keyboard Shortcuts for commonly used
// functons
//
// Copyright (c) 2016 pramodk (https://github.com/pramodk-git)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
// 

chrome.commands.onCommand.addListener(function(command) {
   switch(command) {
   case "Pin-Unpin-Tab":
      // Gets the currently active tab in the current window
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.update(tabs[0].id, {'pinned': !tabs[0].pinned});
      });
      break;
   case "Mute-Unmute-Tab":
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.update(tabs[0].id, {'muted' : !tabs[0].mutedInfo.muted});
      });
      break;
   case "Dupe-Tab":
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         // Well, duplicate is separate from update, but given it is another method to modify tabs, lets include it here
         chrome.tabs.duplicate(tabs[0].id);
      });
      break;
   default:
      console.log("ERROR!!! Unknown command.");
      break;
   }
});
