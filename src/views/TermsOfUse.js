import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import { Colors, Fonts } from '../components/GlobalVariables'

import { HeaderText } from '../components'

export default class TermsOfUse extends Component {
    render() {
        return(
        <ScrollView>
            <View style={styles.container}>
                <HeaderText text='Terms of use' />
                <Text style={styles.sub_title}>Welcome to EventWallet!</Text>

                <Text style={styles.text}>
                      These Terms of Use govern your use of EventWallet and provide information about the EventWallet Service, outlined below. When you create an EventWallet account or use EventWallet, you agree to these terms. {"\n"}{"\n"}

                      We agree to provide you with the EventWallet Service. The Service includes all of the EventWallet products, features, applications, services, technologies, and software that we provide to advance EventWallet’s mission: To bring you the perfect event experience.{"\n"}
                </Text>

                <Text style={styles.sub_title}>Your commitments</Text>
                <Text style={styles.text}>
                      In return for our commitment to provide the Service, we require you to make the below commitments to us.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Who Can Use EventWallet?{"\n"}
                      </Text>
                      We want our Service to be as open and inclusive as possible, but we also want it to be safe, secure, and in accordance with the law. So, we need you to commit to a few restrictions in order to be part of the EventWallet community.
                      •	You must be at least 18 years old.{"\n"}
                      •	You must not be prohibited from receiving any aspect of our Service under applicable laws or engaging in payments related Services if you are on an applicable denied party listing.{"\n"}
                      •	We must not have previously disabled your account for violation of law or any of our policies.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        How You Can't Use EventWallet{"\n"}
                      </Text>
                      Providing a safe and open Service for a broad community requires that we all do our part.{"\n"}
                      •	You can't impersonate others or provide inaccurate information.
                      You don't have to disclose your identity on EventWallet, but you must provide us with accurate and up to date information (including registration information). Also, you may not impersonate someone you aren't, and you can't create an account for someone else unless you have their express permission.{"\n"}
                      •	You can't do anything unlawful, misleading, or fraudulent or for an illegal or unauthorized purpose.{"\n"}
                      •	You can't do anything to interfere with or impair the intended operation of the Service.{"\n"}
                      •	You can't attempt to create accounts or access or collect information in unauthorized ways.
                      This includes creating accounts or collecting information in an automated way without our express permission.{"\n"}
                      •	You can't attempt to buy, sell, or transfer any aspect of your account (including your username) or solicit, collect, or use login credentials or badges of other users.{"\n"}
                      •	You can't use a domain name or URL in your username without our prior written consent.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Permissions You Give to Us{"\n"}
                      </Text>
                      As part of our agreement, you also give us permissions that we need to provide the Service.{"\n"}
                      •	Permission to use your username, profile picture, and information about your actions with accounts, ads, and sponsored content. You give us permission to show your username, profile picture, and information about your actions next to or in connection with accounts, ads, offers, and other sponsored content.{"\n"}
                      •	You agree that we can download and install updates to the Service on your device.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Additional Rights We Retain{"\n"}
                      </Text>
                      If you select a username or similar identifier for your account, we may change it if we believe it is appropriate or necessary (for example, if it infringes someone's intellectual property or impersonates another user).{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Content Removal and Disabling or Terminating Your Account{"\n"}
                      </Text>
                      We can remove any content or information you share on the Service if we believe that it violates these Terms of Use, our policies, or we are required to do so by law. We can refuse to provide or stop providing all or part of the Service to you (including terminating or disabling your account) immediately if you: clearly, seriously or repeatedly violate these Terms of Use, our policies, if you repeatedly infringe other people's intellectual property rights, or where we are required to do so by law.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Our Agreement and What Happens if We Disagree{"\n"}
                      </Text>
                      •	If any aspect of this agreement is unenforceable, the rest will remain in effect.{"\n"}
                      •	Any amendment or waiver to our agreement must be in writing and signed by us. If we fail to enforce any aspect of this agreement, it will not be a waiver.{"\n"}
                      •	We reserve all rights not expressly granted to you.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Who Has Rights Under this Agreement?{"\n"}
                      </Text>
                      •	This agreement does not give rights to any third parties.{"\n"}
                      •	You cannot transfer your rights or obligations under this agreement without our consent.{"\n"}
                      •	Our rights and obligations can be assigned to others. For example, this could occur if our ownership changes (as in a merger, acquisition, or sale of assets) or by law.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Who Is Responsible if Something Happens?{"\n"}
                      </Text>
                      We will use reasonable skill and care in providing our Service to you and in keeping a safe, secure, and error-free environment, but we cannot guarantee that our Service will always function without disruptions, delays, or imperfections. Provided we have acted with reasonable skill and care, we do not accept responsibility for: losses not caused by our breach of these Terms or otherwise by our acts; losses which are not reasonably foreseeable by you and us at the time of entering into these terms.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Updating These Terms{"\n"}
                      </Text>
                      We may change our Service and policies, and we may need to make changes to these Terms so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) at least 30 days before we make changes to these Terms and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Terms.{"\n"}
                </Text>

                <Text style={styles.sub_title}>
                      Data Policy
                </Text>
                <Text style={styles.text}>
                      <Text style={styles.third_title}>
                        What kinds of information do we collect?{"\n"}
                      </Text>
                      To provide the EventWallet Products, we must process information about you. The types of information we collect depend on how you use our Products.
                      Things you and others do and provide.{"\n"}
                      •	Information and content, you provide. We collect the content, communications and other information you provide when you use our Products, including when you sign up for an account, create or share content, and message or communicate with others.{"\n"}
                      •	Information about transactions made on our Products. If you use our Products for purchases or other financial, we collect information about the purchase or transaction. This includes payment information, such as your credit or debit card number and other card information; other account and authentication information; and billing, shipping and contact details.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        How do we use this information?{"\n"}
                      </Text>
                      We use the information we have as described below and to provide and support the EventWallet Products and related services described. Here's how:{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Promote safety, integrity and security{"\n"}
                      </Text>
                      We use the information we have to verify accounts and activity, combat harmful conduct, detect and prevent spam and other bad experiences, maintain the integrity of our Products, and promote safety and security on and off of EventWallet Products.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        How can you exercise your rights provided under the GDPR?{"\n"}
                      </Text>
                      Under the General Data Protection Regulation, you have the right to access, rectify, port and erase your data. You also have the right to object to and restrict certain processing of your data. This includes:{"\n"}
                      •	The right to object to our processing of your data for direct marketing; and{"\n"}
                      •	The right to object to our processing of your data where we are performing a task in the public interest or pursuing our legitimate interests or those of a third party.
                      Data retention and deletion{"\n"}{"\n"}
                      We store data until it is no longer necessary to provide our services and EventWallet Products, or until your account is deleted - whichever comes first. This is a case-by-case determination that depends on things like the nature of the data, why it is collected and processed, and relevant legal or operational retention needs.
                      When you delete your account, we delete your account and all the information on it (such as the remaining tokens on the account). You won't be able to recover that information later.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        How will we notify you of changes to this policy?{"\n"}
                      </Text>
                      We'll notify you before we make changes to this policy and give you the opportunity to review the revised policy before you choose to continue using our Products.{"\n"}
                </Text>

                <Text style={styles.sub_title}>
                      Payment Terms
                </Text>

                <Text style={styles.text}>
                      We have provided some section headers for your convenience, but you should carefully read through these Community Payments Terms (the "Payments Terms") in order to understand your rights and responsibilities, as well as ours.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Making Payments{"\n"}
                      </Text>
                      •	Payment credentials. When you make a payment through the EventWallet Products, you agree to provide a valid payment credential. When you have successfully added your payment credential, we will allow you to initiate a transaction using the payments features through the EventWallet Products.{"\n"}
                      •	Pricing. Pay attention to the details of the transaction, because your total price may include taxes, fees, and shipping costs, all of which you are responsible for paying.{"\n"}
                      •	Extra terms. You may be presented with additional terms related to a specific payment before you confirm the transaction (such as shipping terms for tangible goods). Those additional terms will also govern that transaction.{"\n"}
                      •	Failed payments. If your transaction results in an overdraft or other fee from your bank, you alone are responsible for that fee.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Actions We May Take{"\n"}
                      </Text>
                      •	At-will use. We may revoke your eligibility to make payments through the EventWallet Products at any time at our sole discretion.{"\n"}
                      •	Our right to cancel. We may cancel any transaction if we believe the transaction violates these Payments Terms or the Terms of use, or if we believe doing so may prevent financial loss.{"\n"}
                      •	Sharing of information. In order to prevent financial loss to you or to us, we may contact your payment credential issuer, law enforcement, or affected third parties (including other users) and share details of any payments you are associated with, if we believe doing so may prevent financial loss or a violation of law.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Disputes and Reversals{"\n"}
                      </Text>
                      •	Duty to notify us. If you believe that an unauthorized or otherwise problematic transaction has taken place under your account, you agree to notify us immediately, so that we may take action to prevent financial loss. Unless you submit the claim to us within 30 days after the charge, you will have waived, to the fullest extent permitted by law, all claims against us arising out of or otherwise related to the transaction.{"\n"}
                      •	Technical difficulties. If you experience a technical failure or interruption of service that causes your payment to fail, you may request that your transaction be completed at a later time.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Notices and Amendments to These Payments Terms{"\n"}
                      </Text>
                      •	Notice to you. By using payments features through the EventWallet Products, you agree that we may communicate with you electronically any important information regarding your payments or your account.{"\n"}
                      •	Notice to us. Except as otherwise stated, you must send notices to us relating to payments through the EventWallet Products and these Payments Terms by e-mail to: Contact@EventWallet.com.{"\n"}
                      •	Amendment guidelines. We may update these Payments Terms at any time without notice as we deem necessary to the full extent permitted by law. The Payments Terms in place at the time you confirm a transaction will govern that transaction.{"\n"}{"\n"}

                      <Text style={styles.third_title}>
                        Additional Terms{"\n"}
                      </Text>
                      •	Terms of Service and conflict of terms. Our Terms of service apply to your use of payments features through the EventWallet Products. In the event of any conflict between these Payments Terms and the terms, the Payments Terms shall prevail.{"\n"}
                      •	Conflict of laws. Some countries may restrict or prohibit your ability to make payments through the EventWallet Products. Nothing in these Payments Terms should be read to override or circumvent any such foreign laws.{"\n"}
                      •	Courtesy translations. These Payments Terms were written in English (US). To the extent any translated version of these Payments Terms conflicts with the English version, the English version controls.{"\n"}{"\n"}


                </Text>
            </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 3+'%',
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: Colors.backgroundColor
    },
    text: {
        fontSize: 15,
        color: 'black',
        fontFamily: Fonts.text
    },
    sub_title: {
        marginTop: 10,
        paddingRight: 5,
        textAlign: 'left',
        fontSize: 18,
        //borderBottomWidth: 1,
        fontFamily: Fonts.header,
    },
    third_title: {
        marginTop: 10,
        paddingRight: 5,
        textAlign: 'left',
        fontSize: 16,
        fontFamily: Fonts.header,
    }
})