import React, {CSSProperties, FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, family, size, WP, scrWidth} from '../../shared/exporter';
import {Dropdown} from 'react-native-element-dropdown';
import {Icon} from 'react-native-elements';

interface Props {
  options?: any;
  placeholder?: string;
  value?: string;
  onChangeValue: (value: string) => void | undefined;
  containerStyle?: any;
}

const LanguageSelector: FC<Props> = ({
  options,
  placeholder,
  value,
  onChangeValue,
  containerStyle,
}) => {
  const renderItem = (item: any) => {
    return (
      <View style={styles.itemStyle}>
        <Text style={styles.textItemStyle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, {...containerStyle}]}>
      <Dropdown
        dropdownPosition={'auto'}
        containerStyle={styles.menuStyle}
        data={options || []}
        placeholder={placeholder}
        placeholderStyle={styles.textItemStyle}
        selectedTextStyle={styles.textItemStyle}
        value={value}
        onChange={onChangeValue}
        valueField="value"
        autoScroll
        labelField="title"
        renderRightIcon={() => (
          <Icon
            name="arrow-drop-down"
            type="MaterialIcons"
            size={30}
            color={colors.g4}
          />
        )}
        style={styles.dropStyle}
        renderItem={item => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: WP('2'),
  },
  menuStyle: {
    borderRadius: 15,
    height: WP('19'),
    width: WP('28'),
    elevation: 2,
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  dropStyle: {
    width: WP('28'),
    marginHorizontal: WP('-1.5'),
    borderRadius: 30,
    backgroundColor: colors.g6,
    paddingHorizontal: WP('2'),
  },
  itemStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: WP('2'),
    paddingVertical: WP('2'),
  },
  textItemStyle: {
    fontFamily: family.Poppins_Regular,
    fontSize: size.small,
    color: colors.g3,
    // marginVertical: WP('1'),
  },
  textStyle: {
    // marginVertical: WP('2'),
    // paddingHorizontal: WP('3.5'),
    marginBottom: 10,
    color: colors.b1,
    fontSize: size.normal,
    fontFamily: family.Poppins_Medium,
    fontWeight: '500',
  },
  errorStyle: {
    fontSize: size.normal,
    color: colors.red,
    paddingHorizontal: 13,
    textAlign: 'left',
    fontFamily: family.Poppins_Medium,
    marginTop: WP('2'),
  },
  inputSearchStyle: {
    height: 40,
    width: WP('80'),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.g7,
    marginHorizontal: WP('1.5'),
    fontSize: 16,
    position: 'absolute',
    top: 65,
  },
});

export {LanguageSelector};
