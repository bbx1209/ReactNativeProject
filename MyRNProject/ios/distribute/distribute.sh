#!/bin/bash


rm -rf MyRNProject
mkdir MyRNProject
mkdir MyRNProject/Payload
cp -r MyRNProject.app MyRNProject/Payload/MyRNProject.app
cp Icon.png MyRNProject/iTunesArtwork
cd MyRNProject
zip -r MyRNProject.ipa Payload iTunesArtwork

exit 0

