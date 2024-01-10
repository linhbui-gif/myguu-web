import React from 'react';
import classNames from 'classnames';

import { TIconProps } from './Icon.types';
import { EIconName } from './Icon.enums';
import './Icon.scss';

import Location from './Location';
import AngleDown from './AngleDown';
import AngleLeft from './AngleLeft';
import AngleRight from './AngleRight';
import Search from './Search';
import Calendar from './Calendar';
import Filter from './Filter';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Youtube from './Youtube';
import Verify from './Verify';
import StarFill from './StarFill';
import X from './X';
import Eye from './Eye';
import EyeClosed from './EyeClosed';
import Lightning from './Lightning';
import Heart from './Heart';
import Chat from './Chat';
import House from './House';
import CaretDown from './CaretDown';
import Photo from './Photo';
import Minus from './Minus';
import Plus from './Plus';
import MakeUp from './MakeUp';
import Lamp from './Lamp';
import Scissors from './Scissors';
import Spa from './Spa';
import Check from './Check';
import Users from './Users';
import PlusSquare from './PlusSquare';
import Voucher from './Voucher';
import GuCoin from './GuCoin';
import Note from './Note';
import CheckCircle from './CheckCircle';
import PencilEdit from './PencilEdit';
import Setting from './Setting';
import Gps from './Gps';
import Trash from './Trash';
import LocationFill from './LocationFill';
import Menu from './Menu';
import Bell from './Bell';
import Calendar2 from './Calendar2';
import ChatCircle from './ChatCircle';
import User from './User';
import HeartOutline from './HeartOutline';

const Icon: React.FC<TIconProps> = ({ name, className, color, strokeWidth, onClick, style }) => {
  const renderIcon = (): React.ReactElement => {
    switch (name) {
      case EIconName.Location:
        return <Location color={color} />;
      case EIconName.AngleDown:
        return <AngleDown color={color} />;
      case EIconName.AngleLeft:
        return <AngleLeft color={color} strokeWidth={strokeWidth} />;
      case EIconName.AngleRight:
        return <AngleRight color={color} strokeWidth={strokeWidth} />;
      case EIconName.Search:
        return <Search color={color} />;
      case EIconName.Calendar:
        return <Calendar color={color} />;
      case EIconName.Filter:
        return <Filter color={color} />;
      case EIconName.Facebook:
        return <Facebook color={color} />;
      case EIconName.Instagram:
        return <Instagram color={color} />;
      case EIconName.Youtube:
        return <Youtube color={color} />;
      case EIconName.Verify:
        return <Verify color={color} />;
      case EIconName.StarFill:
        return <StarFill color={color} />;
      case EIconName.X:
        return <X color={color} />;
      case EIconName.Eye:
        return <Eye color={color} />;
      case EIconName.EyeClosed:
        return <EyeClosed color={color} />;
      case EIconName.Lightning:
        return <Lightning color={color} />;
      case EIconName.Heart:
        return <Heart color={color} />;
      case EIconName.Chat:
        return <Chat color={color} />;
      case EIconName.House:
        return <House color={color} />;
      case EIconName.CaretDown:
        return <CaretDown color={color} />;
      case EIconName.Photo:
        return <Photo color={color} />;
      case EIconName.Minus:
        return <Minus color={color} />;
      case EIconName.Plus:
        return <Plus color={color} />;
      case EIconName.MakeUp:
        return <MakeUp color={color} />;
      case EIconName.Lamp:
        return <Lamp color={color} />;
      case EIconName.Scissors:
        return <Scissors color={color} />;
      case EIconName.Spa:
        return <Spa color={color} />;
      case EIconName.Check:
        return <Check color={color} />;
      case EIconName.Users:
        return <Users color={color} />;
      case EIconName.PlusSquare:
        return <PlusSquare color={color} />;
      case EIconName.Voucher:
        return <Voucher color={color} />;
      case EIconName.GuCoin:
        return <GuCoin color={color} />;
      case EIconName.Note:
        return <Note color={color} />;
      case EIconName.CheckCircle:
        return <CheckCircle color={color} />;
      case EIconName.PencilEdit:
        return <PencilEdit color={color} />;
      case EIconName.Setting:
        return <Setting color={color} />;
      case EIconName.Gps:
        return <Gps color={color} />;
      case EIconName.Trash:
        return <Trash color={color} />;
      case EIconName.LocationFill:
        return <LocationFill color={color} />;
      case EIconName.Menu:
        return <Menu color={color} />;
      case EIconName.Bell:
        return <Bell color={color} />;
      case EIconName.Calendar2:
        return <Calendar2 color={color} />;
      case EIconName.ChatCircle:
        return <ChatCircle color={color} />;
      case EIconName.User:
        return <User color={color} />;
      case EIconName.HeartOutline:
        return <HeartOutline color={color} />;
      default:
        return <></>;
    }
  };

  return (
    <div
      className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)}
      onClick={onClick}
      style={style}
    >
      {renderIcon()}
    </div>
  );
};

export default Icon;
